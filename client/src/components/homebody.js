import React,{useState,useEffect} from "react";
import {Row,Col} from "react-bootstrap";
function Homebody(){
    const [user,setUser] = useState([]);
    useEffect(()=>{
        const fetchData = ()=>{
            fetch("http://localhost:5000/users")
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                setUser(data)
            })
        }
        fetchData();
    },[])
    return(
        <div>
            <Row>
                
                {user.map(data =>(
                     <Col key={data._id} sm={12} md={6} lg={4} xl={3}> 
                        <div class="card-group m-2">
                            <div class="card">
                                <img src={data.image} class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{data.name}</h5>
                                        <p class="card-text">{data.email}</p>
                                        <p class="card-text">{data.phone}</p>
                                        <p class="card-text">{data.website}</p>
                                    </div>

                                    <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                            </div>
                        </div>
                    </Col>
                ))}
                
            </Row>
        </div>
    );
}
export default Homebody;