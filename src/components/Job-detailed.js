import React from "react";

function Detailed (props) {

    function dateDiffInDays(a, b) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
      
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.floor((utc1 - utc2) / _MS_PER_DAY);
      }
      
    const a = new Date(props.updatedAt),
        b = new Date(props.createdAt),
        difference = dateDiffInDays(a, b);
          
    function getFormatedStringFromDays(numberOfDays) {
        let days = Math.floor(numberOfDays % 365 % 30);
    
        return [days];
    }
    
    const postedDate = getFormatedStringFromDays(difference);

    return (

        <>
            <div className="flex flex-col font-normal text-lg">
                <a className="w-32 h-[52px] mt-[39px] mb-8 rounded-lg bg-[#384564] flex items-center justify-center" href="job-list">
                    <button>
                        <p className="text-secondary font-semibold text-xs">Apply Now</p>
                    </button>
                </a>
                <div className="leading-7 flex justify-between flex-wrap">
                    <div className="font-bold text-2xl max-w-lg order-1">{props.title}</div>
                    <div className="flex flex-col min-w-[150px] order-1 max-[800px]:order-3">
                        <div className="font-bold text-xl">€ {props.salary}</div>
                        <p className="font-normal text-lg">Brutto, per year</p>
                    </div>
                    <div className="opacity-75 my-[7px] order-2 flex-2 max-sm:flex-none">
                        <div className="text-secondary-txt text-lg font-normal">Posted {postedDate} days ago</div> 
                    </div>
                </div>
                <div>{props.description}</div>
                <div className="my-10">
                    <h2 className="font-bold text-xl mb-2">Responsopilities</h2>
                    <p className="font-normal text-lg">
                        At WellStar, we all share common goals. That’s what makes us so successful – and such an integral part of our communities. We want the same things, for our organization, for our patients, and for our colleagues. 
                        As the most integrated healthcare provider in Georgia, this means we pride ourselves on investing in the communities that we serve. We continue to provide innovative care models, focused on improving quality and access to healthcare.
                        <br/>
                        <br/>
                        Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.
                        The ideal candidate will have five or more years of experience in cardiac surgery. This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation.
                        <br/>
                        <br/>
                        Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.
                    </p>
                    <div className="mt-10 ml-[20px]">
                        <h2 className="font-bold text-xl mb-2">Compensation & Benefits:</h2>
                        <p>Our physicians enjoy a wide range of benefits, including:</p>
                        <ul>
                            <li className="list-square"><span>Very competitive compensation package with bonuses</span></li>
                            <li className="list-square"><span>Medical, Dental, and Vision Insurance</span></li>
                            <li className="list-square"><span>Occurrence-based Malpractice Coverage</span></li>
                            <li className="list-square"><span>Short-term and Long-term Disability Insuranceand life insurance</span></li>
                        </ul>
                    </div>
                </div>
                <a className="w-32 h-[52px] rounded-lg bg-[#384564] flex items-center justify-center" href="/">
                    <button>
                        <p className="text-secondary font-semibold text-xs">Apply Now</p>
                    </button>
                </a>
                <div className="mt-[86px] flex flex-col max-[1080px]:flex-col-reverse">
                    <div className="mt-[15px]">
                        <h1 className="font-bold text-[28px] mb-[9px]">Additional Info</h1>
                        <hr/>
                        <div className="mt-2">
                            <h2>Employment type</h2>
                            <div className="flex flex-row gap-2 mt-2.5">
                                {props.employment_type.map((item) => (
                                    <div key={item} className="flex items-center justify-center w-[222px] max-sm:w-[122px] h-[49px] bg-employment border-solid border-2 border-employment-border rounded-lg">
                                        <span className="text-[#55699E]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-[23px]">
                            <h2>Benefits</h2>
                            <div className="flex flex-row gap-2 mt-2.5">
                                {props.benefits.map((item) => (
                                    <div key={item} className="flex items-center justify-center w-[222px] max-sm:w-[122px] h-[49px] bg-benefits border-solid border-2 border-[#FFCF00] rounded-lg">
                                        <span className="text-[#988B49]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-[86px] mb-12">
                        <h1 className="font-bold text-[28px] mb-[9px]">Attached images</h1>
                        <hr/>
                        <div className="flex flex-row gap-2 mt-3 ">
                            {props.pictures.map((item, index) => (
                                <div key={index}>
                                    <img className="w-52 h-32 rounded-lg" src={item} alt="Gallery"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )

}

export default Detailed;
