import CardUI from "./Card";
function CardListUI(){
    //const userObj = {Name:'name1',desc:'Busting social media myths at the Social Media Lab,...'};
    const users = [{Name:'Name1',desc:'desc1'},{Name:'Name2',desc:'desc2'},{Name:'Name3',desc:'desc3'},{Name:'Name4',desc:'desc4'},{Name:'Name5',desc:'desc5'},{Name:'Name6',desc:'desc6'},{Name:'Name7',desc:'desc7'},{Name:'Name8',desc:'desc8'}]
    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {
                users.map(
                    (user,index) => (<CardUI key={index} 
                                            userFromArr = {user}/>
                                    )
                        )
            }
        </div>
    )
}
export default CardListUI;