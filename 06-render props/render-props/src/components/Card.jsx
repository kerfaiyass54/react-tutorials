export default function Card({ children }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            width: '200px',
            textAlign: 'center'
        }}>
            {children}
        </div>
    );
}