
type ApiStatus = 'success' | 'error' | 'loading';

// alternative to type aliageses


// success response 
interface ApiSuccess {
    status:'success';
    data:{
        id:number;
        name:string;
    }
}

// ErrorResponse 

interface ApiError {
    status:'error';
    message:string;
}


interface ApiLoading {
    status:'loading';
}

// Create a union type

type ApiResponse =  ApiSuccess | ApiError | ApiLoading;

// 2️⃣ Response Handler Function

function handleApiResponse(response:ApiResponse) :string{

  
    switch(response.status){
        case 'success' :
            return `User is ${response.data.name}`;
        case 'error' : 
            return response.message;
        case 'loading' :
            return 'Loading'
    }
}


handleApiResponse({
        status:'loading'
    })
handleApiResponse({
        status:'error',
        message:'Records not found with specified data'
});

handleApiResponse({
        status:'success',
        data:{
            id:3,
            name:'React'
        }
});