import Profile from './components/Profile';

export default function App() {
    return (
        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>

            <Profile
                role="admin"
                person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
            />

            <Profile
                role="member"
                person={{ name: 'John Doe', imageId: 'abc123' }}
            />

            <Profile
                role="guest"
                person={{ name: 'Jane Smith', imageId: 'xyz789' }}
            />

        </div>
    );
}