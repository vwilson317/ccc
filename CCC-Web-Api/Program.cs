var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

var mockData = new Barraca[]
{
    new Barraca{Name = "81"},
    new Barraca{Name = "Rasta"}, 
    new Barraca{Name = "89"}, 
    new Barraca{Name = "Made up"}, 
    new Barraca{Name = "Green"}
};

app.MapGet("/barracas", () =>
{
    return mockData;
})
.WithName("Barracas");

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}

public class Barraca {
    public int Id{get;set;}
    public string Name{get;set;}
    public string LogoUrl{get;set;}
}

public class Menu{
    public int Id{get;set;}
    public int BarracaId{get;set;}
    public DateTime LastUpdateUtc{get;set;}
}

public class MenuItem {
    public int Id{get;set;}
    public int MenuId{get;set;}
    public double Cost{get;set;} //reals
    public string ImageUrl {get;set;}
}

public class Bill {
    public int Id{get;set;}
    public string ExternalId{get;set;}
    public string QRCode{get;set;}
    public IList<BillItem> Items {get;set;}
    public DateTime DateUtc{get;set;}
}

public class BillItem {
    public int Qty{get;set;}
    public int MenuItemId {get;set;}
}