import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AnimatedScrollComponent = ({
    children,
    direction = 'left', // 'left' or 'right'
    duration = 0.8,
    threshold = 0.1,
    triggerOnce = true,
    ...props
}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce, threshold });

    useEffect(() => {
        if (inView) controls.start('visible');
    }, [controls, inView]);

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -100 : 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} {...props}>
            {children}
        </motion.div>
    );
};

export default AnimatedScrollComponent;
