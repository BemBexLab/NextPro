import RevealOnScroll from "./RevealOnScroll";

const SlideLeft = ({ children, id }) => {
    return (
        <RevealOnScroll direction="left" threshold={0.1}>
            {children}
        </RevealOnScroll>
    )
}

export default SlideLeft
