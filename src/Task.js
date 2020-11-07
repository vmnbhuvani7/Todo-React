import React, { useEffect, useState } from 'react'

function Task() {
    const [number, setnumber] = useState({
        mobile: ''
    })
    const changeHandler = (e) => {
        setnumber({
            ...number,
            mobile: e.target.value
        })

    }
    useEffect(() => {
        const num = number.mobile.toString().split('')
        // // if()
        // console.log(num);
        if (num.length === 3) {
            console.log("splice", num.splice(3, 0, "-"));
            console.log(num);
            //     let aa = num.splice(3, 0, "-")
            //     let bbb = num.join()
            setnumber({
                ...number,
                mobile: num.join('')
            })
            //     if (num.length >= 7) {
            //         console.log("splice", num.splice(7, 0, "-"));
            //         let bb = num.splice(7, 0, "-")
            //         setnumber({
            //             ...number,
            //             mobile: num
            //         })
            //     }
        }
    }, [number.mobile])
    console.log("log", number.mobile);
    return (
        <div>
            <p>hello</p>
            <input type="number" onChange={changeHandler} value={number.mobile}  maxLength='10'/>
        </div>
    )
}
// debugger
// function formatPhoneText(value){
//     value = this.replaceAll(value.trim(),"-","");

//     if(value.length > 3 && value.length <= 6) 
//       value = value.slice(0,3) + "-" + value.slice(3);
//     else if(value.length > 6) 
//       value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);

//     return value;
//   }
// console.log("number", number.mobile.toString());
// console.log("after num", number);
// console.log("after num", num.join());

export default Task
