export type Genre = 'Horror'|'Thriller'|'Romance'|'Action'|'Mystery'|'Drama';
export type SceneStatus = 'draft'|'image_ready'|'video_ready'|'review'|'approved'|'error';
export type DialogueLine = { id:string; characterId:string; text:string; order:number };
export type Character = { id:string; name:string; masterRef:string; age:string; identity:string; wardrobeId:string; imageUrl?:string };
export type Scene = { id:string; episode:number; scene:number; title:string; durationSec:30; status:SceneStatus; dialogue:DialogueLine[]; imageUrl?:string; videoUrl?:string; qa?:QAResult };
export type QAResult = { pass:boolean; issues:string[]; speakerErrors:string[]; continuityErrors:string[] };
export type Project = { id:string; title:string; genre:Genre; concept?:string; bible?:string; characters:Character[]; scenes:Scene[]; createdAt:string };
