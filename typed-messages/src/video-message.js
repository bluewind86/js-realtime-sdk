import { FileMessage } from './file-message';
import { messageType } from './realtime';
import inherit from 'inherit';

/**
 * 需要安装 [leancloud-realtime-typed-messages]{@link https://www.npmjs.com/package/leancloud-realtime-typed-messages} package
 * 构造方法参数同 {@link FileMessage}
 * @class
 * @extends FileMessage
 */
export const VideoMessage = inherit(FileMessage);

/**
 * @name TYPE
 * @memberof VideoMessage
 * @type Number
 * @static
 * @const
 */
messageType(-4)(VideoMessage);
