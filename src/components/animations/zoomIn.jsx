import RevealOnScroll from "./RevealOnScroll";

const ZoomIn = ({ children, id = 1 }) => {
    return (
        <RevealOnScroll direction="fade" threshold={0} delay={id === 1 ? 0 : 100 * id}>
            {children}
        </RevealOnScroll>
    )
}

export default ZoomIn
