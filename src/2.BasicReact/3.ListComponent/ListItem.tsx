import IListItem from "./IListItem";

function ListItem(props: IListItem) {

    const {name, age, id, address} = props;

    return (
        <div key={id} style={
            {
                display: "flex",
                gap: "10px",
                border: "1px solid black",
                margin: "10px",
                padding: "20px"
            }
        }>
            <div>{name}</div>
            <div>{age}</div>
            <div>{address}</div>
        </div>
    )
}

export default ListItem