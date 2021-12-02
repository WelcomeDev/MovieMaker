using AutoMapper;

using Microsoft.AspNetCore.Mvc;

using MovieMaker.Service.Controllers.Dto;
using MovieMaker.Service.Model.Bll;
using MovieMaker.Service.Model.Di;
using MovieMaker.Service.Provider.Di;

namespace MovieMaker.Service.Controllers
{
    [ApiController]
    [Route("api/event")]
    //[Authorized]
    public class AdminEventController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IEventProvider _provider;

        public AdminEventController(IEventProvider provider, IMapper mapper)
        {
            _mapper = mapper;
            _provider = provider;
        }

        [HttpPost]
        [Route("create")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create([FromBody] CreateEventDto createEventDto)
        {
            var createParams = _mapper.Map<CreateEventParams>(createEventDto);
            var eventEntity = await _provider.Create(createParams);
            return Ok(_mapper.Map<EventDto>(eventEntity));
        }

        [HttpPost]
        [Route("{id:guid}/update")]
        public async Task<IActionResult> Update([FromQuery] Guid id, [FromBody] UpdateEventDto updateEventDto)
        {
            var updateParams = _mapper.Map<UpdateEventParams>(updateEventDto);
            var eventEntity = await _provider.Update(id, updateParams);

            return Ok(_mapper.Map<EventDto>(eventEntity));
        }

        [HttpPost]
        [Route("{id:guid}/delete")]
        public void Delete([FromQuery] Guid id)
        {
            _provider.Delete(id);
        }
    }
}
