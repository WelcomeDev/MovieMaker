using AutoMapper;

using Microsoft.AspNetCore.Mvc;

using MovieMaker.Service.Controllers.Event.Dto;
using MovieMaker.Service.Provider.Di;

namespace MovieMaker.Service.Controllers.Event
{
    [ApiController]
    [Route("api/event")]
    public class PublicEventController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IEventProvider _provider;

        public PublicEventController(IEventProvider provider, IMapper mapper)
        {
            _mapper = mapper;
            _provider = provider;
        }

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> GetEvents()
        {
            var events = await _provider.GetAll();
            var result = events.Select(item => _mapper.Map<EventDto>(item));

            return Ok(result);
        }
    }
}
