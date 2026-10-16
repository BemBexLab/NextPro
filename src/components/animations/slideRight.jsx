import RevealOnScroll from "./RevealOnScroll";

const SlideRight = ({ children, id = 1 }) => {
    return (
        <RevealOnScroll direction="right" threshold={0.1} delay={id === 1 ? 0 : 100 * id}>
            {children}
        </RevealOnScroll>
    )
}

export default SlideRight
