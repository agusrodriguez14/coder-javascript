import React from "react";
import Item from "./Item";
import FlexWrapper from "./FlexWrapper";

function ItemListCointainer (){
return (
<div>
    <FlexWrapper>
<Item price={250} title="Arandano" imgurl="/img/img1.png"></Item>
<Item price={300} title="Frutilla" imgurl="/img/img2.png"></Item>
<Item price={200} title="Acelga" imgurl="/img/img3.png"></Item> 
<Item price={100} title="Esparrago" imgurl="/img/img4.png"></Item> 

</FlexWrapper>
</div>
);





}

export default ItemListCointainer;