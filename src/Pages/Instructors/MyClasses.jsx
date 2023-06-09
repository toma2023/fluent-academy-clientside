import useAddClass from "../Hooks/useAddClass";


const MyClasses = () => {
    const [addClass] = useAddClass();
    console.log(addClass)


    return (
        <div>

        </div>
    );
};

export default MyClasses;