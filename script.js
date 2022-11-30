const count = (text, char) => {
    let i = 0
    let massive = ''
    let b = 0
    while (i < text.length) {
        massive = text[i]
        ++i
        if (massive == char) {
            ++b
        }
    }
    console.log(b)
    return i
}
count('faefuiohaiofjkofjaweio', 'f')