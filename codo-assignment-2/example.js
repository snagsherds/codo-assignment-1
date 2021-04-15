function fetchData(){
    fetch('https://run.mocky.io/v3/16375822-6d22-4d61-b131-6672e9e13884')
    .then(response =>{
        
        if(!response.ok){
            throw Error("Error");
        }
        return response.json();
    }).then(data =>{
        console.log(data.orderBookDetails);
        
        
        document.querySelector('#company_name').insertAdjacentHTML('afterbegin', data.restaurantsDetails.companyName);
        document.querySelector('#total').insertAdjacentHTML('afterbegin', data.restaurantsDetails.address+" " + 
        data.restaurantsDetails.city+" "+", state-"+data.restaurantsDetails.state );
        document.querySelector('#contact').insertAdjacentHTML('afterbegin',"Phone Number-"+data.restaurantsDetails.phone
        +"Email- "+data.restaurantsDetails.email);
        document.querySelector('#gst').insertAdjacentHTML('afterbegin',"GST No-"+data.restaurantsDetails.gstNo);
        document.querySelector('#Table_No').insertAdjacentHTML('afterbegin', data.orderBookDetails.table_id);
        document.querySelector('#timestamp').insertAdjacentHTML('afterbegin', data.orderBookDetails.timestamp);   
        document.querySelector('#order_no').insertAdjacentHTML('afterbegin', data.orderBookDetails.order_no);    
        const menu_name =  data.orderBookDetails.orderItemsList.map(user => {
            return user.menu_name
        })
        const price =  data.orderBookDetails.orderItemsList.map(user => {
            return user.menu_price
        })
        const qty =  data.orderBookDetails.orderItemsList.map(user => {
            return user.menu_quantity
        })
        const menu_amnt =  data.orderBookDetails.orderItemsList.map(user => {
            return user.menu_amount
        })
        
        document.querySelector('#order_name').insertAdjacentHTML('afterbegin', menu_name);
        document.querySelector('#order_price').insertAdjacentHTML('afterbegin', price);
        document.querySelector('#menu_qty').insertAdjacentHTML('afterbegin', qty);
        document.querySelector('#menu_ammount').insertAdjacentHTML('afterbegin', menu_amnt);
        document.querySelector('#sub_total').insertAdjacentHTML('afterbegin', data.orderBookDetails.sub_total); 
        document.querySelector('#discount').insertAdjacentHTML('afterbegin', data.orderBookDetails.discount);  
        document.querySelector('#grand_total').insertAdjacentHTML('afterbegin', data.orderBookDetails.grand_total); 

    });
}

fetchData();