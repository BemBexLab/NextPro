import RevealOnScroll from "./RevealOnScroll";

const SlideUp = ({ children, id = 1 }) => {
    return (
        <RevealOnScroll direction="up" threshold={0} delay={id === 1 ? 0 : 100 * id}>
            {children}
        </RevealOnScroll>
    )
}

export default SlideUp
