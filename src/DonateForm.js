import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';

const validationSchema=yup.object({
    name:yup.string().required("required field"),
    sum:yup.string().required("required field").matches(/^[0-9]/,"only numbers"),
    inscription:yup.string(),
 
})
    const Formyup=(props)=>{
     let {addFunction}=props
    
     const { register, handleSubmit, formState: { errors }, reset } = useForm({
         resolver: yupResolver(validationSchema),
       });
       const onSubmitHandler = (data) => {
        data["date"]=new Date()                                        
        addFunction(data)
         console.log({ data });
        reset();
       };
      return (
         <form onSubmit={handleSubmit(onSubmitHandler)}>
           <h2>Lets donate</h2>
          <br />
             <label> Enter your name</label>
          <input {...register("name")} placeholder="name" />
          <p>{errors.name?.message}</p>
          <br />
    
          <input
            {...register("sum")}
            placeholder="sum"
            
           />
          <p>{errors.sum?.message}</p>
          <br />
          <input
            {...register("inscription")}
            placeholder="inscription"
            
          />
          <p>{errors.inscription?.message}</p>
          <br />
    
          <button type="submit">Donate</button>
         </form>
       )}
export default Formyup
