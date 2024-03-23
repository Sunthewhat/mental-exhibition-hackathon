import Link from 'next/link';
import styles from '../pages/pdpa_page/page.module.css';

interface Props {
    title: string;
    command: string;
    type?: 'TYPE1' | 'TYPE2';
    symbol?: boolean;
}

export default function GButton({ title, command, type}: Props) {
    
    if (type == 'TYPE1') {
        return(
        <Link className="text-[#B9A5D6] text-[16px] font-bold z-20" href={command}>
            <button className={`px-[40px] md:px-[60px] py-[15px] rounded-[16px] border-[#B9A5D6] border-[2px]`}>
                {title}
            </button>
        </Link>
        )
    }
    return (
        <Link className="text-white text-[16px] font-bold z-20" href={command}>
            <button className={`${styles.btn_gradient} px-[50px] md:px-[60px] py-[15px] rounded-[8px]`}>
                {title}
            </button>
        </Link>
    );
}