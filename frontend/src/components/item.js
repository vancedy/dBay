

export const Item = (props) => {


    return(
<table>
    <tr>
        <td>{props.name}</td>
        <td>${props.price}</td>
    </tr>

    <tr>
        <td>{props.description}</td>
        <td><button onClick={()=>{console.log('buying ' + props.name)}}>Buy me</button></td>
    </tr>
</table>

    )
    
}
