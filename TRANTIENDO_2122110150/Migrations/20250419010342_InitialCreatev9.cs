using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TRANTIENDO_2122110150.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreatev9 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "Users",
                newName: "Username");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Users",
                newName: "Role");

            migrationBuilder.RenameColumn(
                name: "Avatar",
                table: "Users",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Products",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Categories",
                newName: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Users",
                newName: "Phone");

            migrationBuilder.RenameColumn(
                name: "Role",
                table: "Users",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Users",
                newName: "Avatar");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Products",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Categories",
                newName: "ID");
        }
    }
}
