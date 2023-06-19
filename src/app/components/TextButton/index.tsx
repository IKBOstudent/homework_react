import styles from './text-button.module.css';
import classNames from 'classnames';

interface Props {
    content: string;
    style: 'outlined' | 'filled';
}

function TextButton({ content, style }: Props) {
    return (
        <button
            className={classNames(
                styles.root,
                style === 'outlined' ? styles.outlined : styles.filled,
            )}>
            {content}
        </button>
    );
}

export default TextButton;
