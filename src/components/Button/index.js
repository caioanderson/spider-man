import './styles.scss';

export function Button({ title, outline }) {
    return (
        <>
            {outline ? (
                <button className='outline'>{title}</button>
            ) : (
                <button >{title}</button>
            )}
        </>
    );
}