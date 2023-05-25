"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const launcher_1 = require("bdsx/launcher");
command_1.command.register("복사", "손에 들고있는 아이템을 복사합니다").overload(async (param, origin) => {
    const player = origin.getEntity();
    if (player === null)
        return;
    const item = player.getMainhandSlot().getRawNameId();
    const amount = player.getMainhandSlot().getAmount();
    if (amount === 0) {
        player.sendMessage("들고 있는 아이템이 없습니다!");
        return;
    }
    ;
    launcher_1.bedrockServer.executeCommand(`give "${player.getName()}" ${item} ${amount}`);
}, {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQXVDO0FBQ3ZDLDRDQUE4QztBQUU5QyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxRQUFRLENBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUMzRSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEMsSUFBSSxNQUFNLEtBQUssSUFBSTtRQUFFLE9BQU87SUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdkMsT0FBTztLQUNWO0lBQUEsQ0FBQztJQUNGLHdCQUFhLENBQUMsY0FBYyxDQUFDLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2pGLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyJ9