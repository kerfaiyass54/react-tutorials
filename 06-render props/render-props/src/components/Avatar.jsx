export default function Avatar({ size, person }) {
    return (
        <img
            src={`https://i.imgur.com/${person.imageId}.jpg`}
            alt={person.name}
            width={size}
            height={size}
            style={{ borderRadius: '50%' }}
        />
    );
}