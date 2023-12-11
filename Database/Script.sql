-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `surname` VARCHAR(45) NULL,
  `position` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `created_date` TIMESTAMP NULL,
  `created_by` VARCHAR(45) NULL,
  `updated_date` TIMESTAMP NULL,
  `uploaded_by` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `id_UNIQUE` (`user_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`patients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`patients` (
  `patient_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `surname` VARCHAR(45) NULL,
  `date_of_birth` DATE NULL,
  `gender` VARCHAR(5) NULL,
  `phone_number` VARCHAR(10) NULL,
  `weight` VARCHAR(10) NULL,
  `height` VARCHAR(10) NULL,
  `b_pressure` VARCHAR(10) NULL,
  `blood_type` VARCHAR(5) NULL,
  `diagnosis` TEXT NULL,
  `created_date` TIMESTAMP NULL,
  `created_by` VARCHAR(45) NULL,
  `updated_date` TIMESTAMP NULL,
  `uploaded_by` VARCHAR(45) NULL,
  `medic_person_id` INT NOT NULL,
  PRIMARY KEY (`patient_id`),
  INDEX `fk_patients_medic_person1_idx` (`medic_person_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`patient_id` ASC) VISIBLE,
  CONSTRAINT `fk_patients_medic_person1`
    FOREIGN KEY (`medic_person_id`)
    REFERENCES `mydb`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`images` (
  `img_id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(45) NULL,
  `patients_id` INT NOT NULL,
  `created_date` TIMESTAMP NULL,
  `created_by` VARCHAR(45) NULL,
  `updated_date` TIMESTAMP NULL,
  `uploaded_by` VARCHAR(45) NULL,
  PRIMARY KEY (`img_id`),
  INDEX `fk_images_patients1_idx` (`patients_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`img_id` ASC) VISIBLE,
  CONSTRAINT `fk_images_patients1`
    FOREIGN KEY (`patients_id`)
    REFERENCES `mydb`.`patients` (`patient_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`error_logs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`error_logs` (
  `iderror_logs` INT NOT NULL ,
  `error_logscol` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  `created_date` TIMESTAMP NULL,
  `created_by` VARCHAR(45) NULL,
  `updated_date` TIMESTAMP NULL,
  `uploaded_by` VARCHAR(45) NULL,
  PRIMARY KEY (`iderror_logs`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;