import { useRouter } from "next/router";

const DeveloperPage=()=>{
    const details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ]
    const router=useRouter();
    const id=router.query.id;
    const developer=details.find(item=>item.id===Number(id));
    if (!developer){
        return <h1>Developer does not exist</h1>
    }

    return <>
        <h1>{developer.name}</h1>
        <p>{developer.role}</p>
    </>
}
export default DeveloperPage;