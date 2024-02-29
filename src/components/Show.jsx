import React from "react";

function Show ({img, name, url}) {
return(
    <section className="Card">
        <img src={img} title={name} alt={name}  />
        <h5> {name}</h5>
        <a className="Button" href={url}>  Show's Website </a>
    </section>
)
}

export default Show;
