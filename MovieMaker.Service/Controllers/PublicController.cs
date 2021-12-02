using AutoMapper;

using Microsoft.AspNetCore.Mvc;

using MovieMaker.Service.Controllers.Dto;
using MovieMaker.Service.Provider.Di;

namespace MovieMaker.Service.Controllers
{
    [ApiController]
    [Route("api/event")]
    public class PublicController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IEventProvider _provider;

        public PublicController(IEventProvider provider, IMapper mapper)
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
