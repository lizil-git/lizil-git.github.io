let fileInput = document.getElementById('file');
fileInput.onchange = async function (e) {
    const file = fileInput.files[0];
    if (!file) {
        return
    }
    let chunks = createChunks(file, 10 * 1024 * 1024) // 0-99个字节
    console.log(chunks);
    let res = await hash(chunks);
    console.log(res)
}
function hash(chunks) {
    return new Promise((resolve, reject) => {
        try {
            const spark = new SparkMD5();
            function _read(i) {
                if (i >= chunks.length) {
                    resolve(spark.end())
                    return;
                }
                const blob = chunks[i];
                const reader = new FileReader();
                reader.onload = e => {
                    const bytes = e.target.result; // 读取到的字节数组
                    spark.append(bytes); // 自动会进行增量计算 
                    _read(i + 1);
                }
                reader.readAsArrayBuffer(blob);
            }
        } catch (error) {
            reject(error)
        }
        _read(0)
    })
}
function createChunks(file, chunkSize) {
    const result = [];
    for (let i = 0; i < file.size; i += chunkSize) {
        // file.slice(0,100) // 0-99个字节 得到一个Blod文件
        result.push(file.slice(i, i + chunkSize))
    }
    return result;
}