using Vertex.Middleware;
using Vertex.Services.EmailService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IEmailService, EmailService>();

builder.Services.AddWebOptimizer(pipeline =>
{
    //css bundles
    pipeline.AddCssBundle("/css/layout-bundle.css", 
        "/css/layout.css");
    pipeline.AddCssBundle("/css/home-bundle.css", 
        "/css/home.css");

    // js bundles
    pipeline.AddJavaScriptBundle("/js/layout-bundle.js", 
        "/js/phone-mask.js",
        "/js/api-request.js",
        "/js/loader.js",
        "/js/modal.js",
        "/js/helpers.js",
        "/js/application.js",
        "/js/layout.js");
    pipeline.AddJavaScriptBundle("/js/home-bundle.js",
        "/js/home.js");
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    
    app.UseWebOptimizer();
}

// app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.UseUtm();

app.Run();