function Random(){
    return <div>
        <h1 style={{'background-color':'#FF0000'}}>{Math.round(Math.random()*10+1)}</h1>
    </div>
}
export default Random;