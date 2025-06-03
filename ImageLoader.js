export default function ImageLoader({ src }) {
    if(src.startsWith('https://') || src.startsWith('http://') || src.startsWith('www.')){
        return `${src}`
    }
    else{
        return `https://nextpro-js.themeperch.net/${src}`;
    }
}