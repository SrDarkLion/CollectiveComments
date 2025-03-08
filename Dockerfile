FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /app

COPY ./ /app

RUN dotnet restore && \
  dotnet publish "./CollectiveComments.csproj" --output "/app/dist" --configuration Release --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS prd

WORKDIR /app

COPY --from=build /app/dist/ /app

EXPOSE 5238

ENTRYPOINT ["dotnet", "CollectiveComments.dll"]