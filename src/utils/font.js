import {Inter, Manrope} from 'next/font/google';

const inter_init = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable:'--font-inter',
    display:'swap'
  });
  
  const manrope_init = Manrope({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    variable:'--font-manrope',
    display:'swap'
  });

  export  const inter = inter_init.variable;
  export  const manrope = manrope_init.variable;
