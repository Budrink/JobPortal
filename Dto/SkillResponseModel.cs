using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobPortal.Dto
{
	public class SkillResponseModel
	{
		public int TotalCount { get; set; }
		public SkillModel[] Skills { get; set; }
	}
}
