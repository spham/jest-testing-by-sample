import * as model from '../../../rest-api/model';
import * as vm from './viewModel';

export const mapMemberModelToVM = (member: model.Member): vm.Member => ({
  id: member.id,
  name: member.login,
  avatarUrl: member.avatar_url,
});
