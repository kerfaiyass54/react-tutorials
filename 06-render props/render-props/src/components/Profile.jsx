import Avatar from './Avatar';
import Card from './Card';

export default function Profile(props) {
    let roleContent;

    switch (props.role) {
        case 'admin':
            roleContent = <p>Role: Admin — Full Access</p>;
            break;
        case 'member':
            roleContent = <p>Role: Member — Limited Access</p>;
            break;
        case 'guest':
            roleContent = <p>Role: Guest — Read Only</p>;
            break;
        default:
            roleContent = <p>Unknown Role</p>;
    }

    return (
        <Card>
            <Avatar size={100} person={props.person} />
            <h2>{props.person.name}</h2>
            {roleContent}
        </Card>
    );
}