const net = require('net')

const socket = new net.Socket({})

socket.connect({
    host: '127.0.0.1',
    port: 4000
})

//socket.write('good morning King')

// 课程id列表
const LESSON_IDS = [
    "136797",
    "136798",
    "136799",
    "136800",
    "136801",
    "136803",
    "136804",
    "136806",
    "136807",
    "136808",
    "136809",
    "141994",
    "143517",
    "143557",
    "143564",
    "143644",
    "146470",
    "146569",
    "146582"
]

let buffer = Buffer.alloc(4)
let index = Math.floor(Math.random() * LESSON_IDS.length)

socket.on('data', (buffer) => {
    const seqbuffer = buffer.slice(0, 2)
    const titleBuffer = buffer.slice(2)

    console.log(seqbuffer.readInt16BE(), titleBuffer.toString());
    index = Math.floor(Math.random() * LESSON_IDS.length)
    socket.write(encode(index))
})

let seq = 0;
function encode(index){
    buffer = Buffer.alloc(6)
    buffer.writeInt16BE(seq++)
    buffer.writeInt32BE(
        LESSON_IDS[index],2
    )
    return buffer
}

socket.write(encode(index))

