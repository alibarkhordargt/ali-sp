import { v4 as uuidv4 } from 'uuid';

const generateTrackId = (): string => uuidv4();

export default generateTrackId;
