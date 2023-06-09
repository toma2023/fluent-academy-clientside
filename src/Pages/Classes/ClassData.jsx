import useAddClass from "../Hooks/useAddClass";
import Classes from "./Classes";


const ClassData = () => {
    const [addClass] = useAddClass();
    console.log(addClass)
    const approvedClasses = addClass.filter(classData => classData.status === 'approved')
    return (
        <div>
            {
              approvedClasses.map(classData=>
                <Classes key={classData._id}
                classData={classData}
                ></Classes>
                
                )  
            }
        </div>
    );
};

export default ClassData;