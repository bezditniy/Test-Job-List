import React from "react";
import { Link, useParams } from "react-router-dom";
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

import MapStyle from "../components/mapStyle"

import Share from "../images/Share.svg"
import MarkItem from "../images/MarkItem.svg"
import NavigateMark from "../images/NavigateMark.svg"
import Arrow from "../images/Arrow.svg"
import Location from "../images/Location.svg";

import JobDetailed from "../components/Job-detailed"

const Detail = ({products}) => {

    const {link} = useParams();

    let array = products.filter((obj) => obj.id === link)

    const containerStyle = {
        width: '436x',
        height: '290px',
    };

    let mapOtions = {
        zoom: 5,
        styles: MapStyle,
        disableDefaultUI: true,
        
    }

    console.log()

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDEYtpim29telAXPDKtKdX_2Zaaai5thNY",
      });
    
      if (!isLoaded) return <div>Loading...</div>;
   

    return (
        <div className="bg-secondary flex max-[1100px]:flex-col-reverse flex-row-reverse max-[1100px]:items-center justify-center h-auto px-5 pt-[56px] pb-[162px]">
            <div className="max-[1100px]:mt-8 max-sm:max-w-[446px]">
                <div className="min-[1100px]:hidden my-4">
                    <h1 className="font-bold text-[28px] mb-[9px]">Contacts</h1>
                    <hr/>
                </div>
                <div className="max-w-[402px] h-[436px] min-w-[300px] max-sm:max-w-[500px] bg-[#2A3047] relative overflow-hidden rounded-lg">
                    {array.map((item)=>( 
                        <div className="relative z-10 flex flex-col gap-2 mx-12 mt-8 mb-4" key={item.id}>
                            <h2 className="text-secondary text-xl font-bold">{item.name}</h2>
                            <div className="flex gap-1 text-secondary text-xl"><img src={NavigateMark} alt="Navigate Mark"/>{item.address}</div> 
                            <div className="text-secondary text-lg">
                                <p>{item.phone}</p>
                                <p>{item.email}</p>
                            </div>
                        </div>
                    ))} 
                    <div className="w-[273px] h-[273px] rounded-full bg-[#202336] absolute top-[-15px] left-[-60px]"></div>
                    <div>
                        {array.map((item) => (
                            <GoogleMap
                            key={item.location.lat}
                            mapContainerStyle={containerStyle}
                            options={mapOtions}
                            center={{lat: item.location.lat, lng: item.location.long}}
                            >
                            <MarkerF icon={{url: Location}} position={{lat: item.location.lat, lng: item.location.long}}/>
                            </GoogleMap>  
                        ))} 
                    </div>
                </div>
            </div>
            <div className="ml-[80px] mr-[100px] max-[1180px]:mr-[30px] max-[1100px]:mx-0 max-w-[723px] relative">
                <div>
                    <div className="flex justify-between flex-wrap gap-2 max-sm:flex-col">
                        <div className="order-1">
                            <h1 className="font-bold text-[28px]">Jod Details</h1>
                        </div>
                        <div className="flex order-1 max-sm:order-3 gap-7">
                            <div className="flex items-center gap-4"><img className="w-4" src={MarkItem} alt="Mark Item"/><p className="font-normal text-lg">Save to my list</p></div>
                            <div className="flex items-center gap-4"><img className="w-4" src={Share} alt="Share"/><p className="font-normal text-lg">Share</p></div>
                        </div>
                        <hr className="order-2 flex-2"/>
                    </div>
                </div>
                <div>
                    {array.map((item)=>(
                        <JobDetailed
                            key={item.id}
                            pictures={item.pictures}
                            title={item.title}
                            updatedAt={item.updatedAt}
                            createdAt={item.createdAt}
                            employment_type={item.employment_type}
                            benefits={item.benefits}
                            salary={item.salary}
                            description={item.description}
                        />
                    ))} 
                </div>
                <div className="w-[213px] h-[50px] bg-primary rounded-lg flex justify-center mt-[89px] relative max-[1100px]:hidden min-[1180px]:left-[-80px]">
                    <Link className="flex gap-3 items-center" to={"/job-list"}>
                        <img src={Arrow} alt="Navigate Mark"/>
                        <p className="font-semibold text-sm">RETURN TO JOB BOARD</p>
                    </Link>
                </div>
            </div>  
        </div>
    )
}

export default Detail