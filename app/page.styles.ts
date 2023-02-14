import { motion, Variants } from 'framer-motion'

// variants for the example animation
const exampleAnimVariants: Variants = {
  inactive: {
    x: 0,
  },
  active: {
    x: 100,
    borderRadius: '50%',
    transition: {
      type: 'spring',
      damping: 20,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
}

export const exampleAnim = {
  background: 'brand.purple',
  borderRadius: '0.5rem',
  width: '10rem',
  height: '10rem',
  m: '2rem',
  cursor: 'pointer',
  as: motion.div, // add to enable framer motion support
  // framer motion props
  initial: 'inactive', // start state
  animate: 'active', // current state to animate to - can by dynamic for advanced animation
  variants: exampleAnimVariants, // animation properties
  whileHover: {
    // example of gesture state
    scale: 2,
  },
}

const mockItemVariants: Variants = {
  inactive: {
    y: 50,
    opacity: 0,
  },
  active: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 40,
    },
  },
}

export const mockItemStyle = {
  padding: '1rem',
  width: '100%',
  background: 'white',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  as: motion.div,
  variants: mockItemVariants,
  _hover: {
    background: 'brand.teal',
    color: 'white',
  },
}
