import ListItem from "./ListItem";

function ListComponent() {

    const listOfPeople = [
        {
            id: 1,
            name: "utkarsh",
            age: 28,
            address: 3233
        },
        {
            id: 2,
            name: "arun",
            age: 20,
            address: 1836
        },
        {
            id: 3,
            name: "aman",
            age: 21,
            address: 204
        },
        {
            id: 4,
            name: "akash",
            age: 33,
            address: 1090
        }
    ]


    return (
        <>
        {/* INSTEAD OF THIS HARDCODING WE CAN USE MAP  */}
            {/* <div style={
                {
                    display: "flex",
                    gap: "10px",
                    border: "1px solid black",
                    margin: "10px",
                    padding: "20px"
                }
            }>
                <div>utkarsh</div>
                <div>28</div>
                <div>3233</div>
            </div>

            <div style={
                {
                    display: "flex",
                    gap: "10px",
                    border: "1px solid black",
                    margin: "10px",
                    padding: "20px"
                }
            }>
                <div>aman</div>
                <div>49</div>
                <div>3233</div>
            </div> */}


            {/* WHENEVER you are display a list there needs to be a KEY attribute so that react can optimize */}
            {/* Ideally Key should be unique but sometime we can use other things as well (index) */}

            {/* {listOfPeople.map((people, index) => {
                const {name, address, age, id} = people;
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
            })} */}

            {listOfPeople.map((people) => {
                const {name, address, age, id} = people;
                return <ListItem name={name} address={address} age={age} id={id} />
            })}

        </>
    );
}   

export default ListComponent;