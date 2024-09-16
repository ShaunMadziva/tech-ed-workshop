import ListItem from "./ListItem";


export default function ToDo() {
    return (
        <div>
            <h1>This is my ToDO list!:</h1>
            <img src="https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif?cid=790b7611g1q3uz9eh8afm6q01absxnkvzpgqz8ykp5lh1c0u&ep=v1_gifs_search&rid=giphy.gif&ct=g"></img>
            <ol>
                <li>
                    <ListItem /> 
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
            </ol>
        </div>
    )
}