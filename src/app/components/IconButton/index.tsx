import Image from 'next/image';

import styles from './icon-button.module.css';
import classNames from 'classnames';

interface Props {
    content: 'plus' | 'minus';
    disabled: boolean;
}

function IconButton({ content, disabled }: Props) {
    return (
        <button
            className={classNames(styles.root, content === 'plus' ? styles.plus : styles.minus)}
            disabled={disabled}>
            <Image
                src={content === 'plus' ? '/images/icon-plus.svg' : '/images/icon-minus.svg'}
                alt="icon"
                width={12}
                height={12}
                className={styles.icon}
                priority
            />
        </button>
    );
}

export default IconButton;
