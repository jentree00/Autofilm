import {Project,Genre} from './types';
export const genres:Genre[]=['Horror','Thriller','Romance','Action','Mystery','Drama'];
export const demoConcepts=[
 {title:'Ang Huling Tawag',logline:'Isang nurse ang nakakatanggap ng tawag mula sa sarili niyang numero—tatlong minuto bago may mamatay.'},
 {title:'Silid 13',logline:'Isang magkasintahan ang bumalik sa lumang motel at natuklasang may nawawalang bahagi ng kanilang nakaraan.'},
 {title:'Sa Likod ng Salamin',logline:'Tuwing 3:13 AM, ibang tao ang lumilitaw sa salamin ng isang boarding house.'},
 {title:'Bahay sa Dulo',logline:'Isang rescue team ang nakahanap ng batang humihingi ng tulong sa bahay na matagal nang nasunog.'},
 {title:'Huwag Kang Lilingon',logline:'Tatlong magkakaibigan ang may iisang panuntunan sa gubat—hanggang may tumawag sa pangalan nila.'}
];
export function seedProject(genre:Genre, concept:string):Project{
 const chars=[{id:'c1',name:'Maya',masterRef:'Maya_MasterRef_v1',age:'mid-20s',identity:'Filipina woman, shoulder-length black hair, expressive eyes, realistic skin texture',wardrobeId:'Maya_Wardrobe_v1'}, {id:'c2',name:'Eli',masterRef:'Eli_MasterRef_v1',age:'late-20s',identity:'Filipino man, short black hair, lean build, realistic skin texture',wardrobeId:'Eli_Wardrobe_v1'}];
 const scenes=Array.from({length:15},(_,i)=>({id:`EP${String(Math.floor(i/3)+1).padStart(2,'0')}_SCENE${String(i%3+1).padStart(2,'0')}`,episode:Math.floor(i/3)+1,scene:i%3+1,title:`Scene ${i%3+1}`,durationSec:30 as const,status:'draft' as const,dialogue:[{id:`d${i}a`,characterId:'c1',text:'Nasaan ka?',order:1},{id:`d${i}b`,characterId:'c2',text:'Akala ko kasama kita.',order:2}]}));
 return {id:Date.now().toString(),title:concept,genre,concept,bible:'AI Story Bible draft — Filipino cinematic horror thriller.',characters:chars,scenes,createdAt:new Date().toISOString()};
}
